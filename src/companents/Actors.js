export default function Actors(props) {

    let actors = props.actors

    return (
        <>
            <h2>В главных ролях</h2>
            <div className='actors' >
              {actors.map(
                (actor, key) => 
                <>
                    <div>Актер: {actor.name}</div>
                    <div>Роль: {actor.role}</div>
                </>
              )}  
            </div>
        </>
    )
}