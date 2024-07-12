import React from 'react'

const Title = '';
const Description = '';

const titleHandler = function(e) {
  result.Title = e.target.value;
}
const descriptionHandler = function(e) {
  result.Title = e.target.value;
}
const hrefHandler = function(e) {
  result.Title = e.target.value;
}

const CreateService = () => {
  return (
    <div>
      <form method='post' encType='multipart/form-data' action="/gallery">
        <input type="text" placeholder='Title' onChange={titleHandler}/>
        <input type="text" placeholder='Title' onChange={descriptionHandler}/>
        <input type="text" placeholder='Link' onChange={hrefHandler} />
        <input type="file" name="file"/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
};

export default CreateService