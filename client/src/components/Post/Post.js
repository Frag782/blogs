export const Post = ({ title, text, image }) => {

    return (
        <div>
            { title && <h3 className='border-bottom p-3'>{ title }</h3>}

            <div className='row align-items-center'>
                { image && <img className='col' src={ image } alt='Image' style={{ maxHeight:'200px', objectFit:'contain' }}></img> }
                { text && <p className='col'>{ text }</p> }
            </div>
        </div>
    )
}