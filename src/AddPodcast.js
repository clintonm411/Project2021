import { useState } from 'react';

function AddPodcast() {

    // AddPodcast can transition to the following 5 states:
    // (1) initial, (2) loading, (3) validationFailed, (4) successful, (5) unsuccessful
    const [state, setState] = useState("initial");
    const [formErrors, setFormErrors] = useState([]);

    // (1) Read the values in the input elements
    let name;
    let title;
    let description;
    let mediaLink;
    let youtubeEmbedLink;


    let termsAndConditionsField;



    // This will store text data and attachments
    const formData = new FormData();


    function attachFile(evt) {

        
        // Create an array from the attachment(s)
        const files = Array.from(evt.target.files);
        console.log('attachFile', files)

        // For each attachment, append the file to formData
        files.forEach(
            function(fileAttachment, index) {
                formData.append(index, fileAttachment);
            }
        )
    }
    
    function AddPodcast() {
            
    
        // (2) Validate the value
        const errors = [];
    
        if( name.value.length === 0 ) {
            errors.push('Please enter podcast name');
        }
    
        if( title.value.length === 0 ) {
            errors.push('Please enter Title');
        }

        if( description.value.length === 0 ) {
            errors.push('Please enter Desciption');
        }
    
    
        if( youtubeEmbedLink.value.length === 0 ) {
            errors.push('Please enter Youtube Embed Link');
        }

        if( termsAndConditionsField.checked === false) {
            errors.push('Check box above');
        }


        // If the required fields are valid
        if( errors.length === 0 ) {
            // Show the preloader
            setState("loading")

            // Prepare formData for backend
            formData.append('name', name.value);
            formData.append('title', title.value);
            formData.append('description', description.value);
            formData.append('mediaLink', mediaLink.value);
            formData.append('youtubeEmbedLink', youtubeEmbedLink.value);
            

            // AddPodcast data
            fetch(
                'http://localhost:3001/products/create',
                {
                    method: 'POST',
                    headers: {
                        // 'Content-type': 'application/json'
                    },
                    body: formData
                }
            )
            // Convert encoded string to JSON
            .then(
                function(backendResponse) {
                    return backendResponse.json()
                }
            )
            .then(
                function(jsonResponse) {
                    if(jsonResponse.name) {
                        setState("successful")
                    } else {
                        setState("unsuccessful")
                    }   
                }
            )
            .catch(
                function(backendError) {
                    setState("unsuccessful");
                }
            )
    
        } 
        // If the required fields are NOT valid
        else {
            // Indicate the error
            setState("validationFailed");
            setFormErrors(errors);
        }
    }

    return (
        <div className="container" style={{"margin-top": "5em", "max-width": "40em"}}>
            <h1>AddPodcast</h1>
            <br/>



            <label>Enter the Podcast Name *</label>
            <input ref={
                function(theComponent) {
                    name = theComponent
                }
            } className="field form-control" name="name" type="text" />

            <label>Enter Podcast Title *</label>
            <input ref={
                function(theComponent) {
                    title = theComponent
                }
            } className="field form-control" name="title" type="text" />

            <label>Enter Podcast Description *</label>
            <input ref={
                function(theComponent) {
                    description = theComponent
                }
            } className="field form-control" name="description" type="text" /> 

            <label>Enter Podcast Link </label>
            <input ref={
                function(theComponent) {
                    mediaLink = theComponent
                }
            } className="field form-control" name="mediaLink" type="text" />   

            <label>Enter Youtube embed link * </label>
            <input ref={
                function(theComponent) {
                    youtubeEmbedLink = theComponent
                }
            } className="field form-control" name="youtubeEmbedLink" type="text" />             

            <br/><br/>

            {/* <label>Upload your Podcast picture</label>
            <input ref={
                function(theComponent) {
                    podcastImage = theComponent
                }
            } 

            onClick={attachFile}    
            onChange={attachFile}
            className="field form-control" id="photo" name="file" type="file" multiple="multiple"/>

            <br/><br/> */}

            <label>Ready to add podcast? *</label>
            <input ref={
                function(theComponent) {
                    termsAndConditionsField = theComponent
                }
            }
            className="checkbox" name="termsConditions" type="checkbox" /> Yes

            <br/><br/>

            {
                (state !== 'loading' && state !== 'successful') &&
                <button 
                onClick={AddPodcast}
                className="btn btn-primary"
                style={{"padding": "10px", "font-size": "16px"}}>
                    Add Podcast
                </button>
            }

            {
                state === 'loading' &&
                <p>Loading...</p>
            }

            {
                state === 'validationFailed' &&
                <div className="mt-5 alert alert-danger">
                    Please enter correct details
                    
                    <ul>
                    {
                        formErrors.map(
                            function(message) {
                                return (
                                    <li>{message}</li>
                                )
                           }
                        ) 
                    }
                    </ul>

                </div>
            }

            {
                state === 'successful' &&
                (<div>
                    <a href="/addpodcast"><button className="btn btn-primary"
                style={{"padding": "10px", "font-size": "16px"}}>
                    Add Another Podcast
                </button></a>
                <button 
                onClick={AddPodcast}
                className="btn btn-primary"
                style={{"padding": "10px", "font-size": "16px"}}>
                    Add Podcast
                </button>
                <div className="alert alert-success">Podcast successfully added </div></div>)
                
            }

            {
                state === 'unsuccessful' &&
                <div className="mt-5 alert alert-danger">Something went wrong. Please try again.</div>
            }
        </div>
    )
}


export default AddPodcast;