export default function Contents(props){
    
    let contents = props.contents

    return (
        <>
            <h2>Содержание</h2>
            <div className='actors' >
              {contents.map(
                (content, key) => 
                <>
                    <li>{content.name}</li>
                </>
              )}  
            </div>
        </>
    )
}