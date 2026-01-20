function UserProfile(props) {
    return (
        <>
        <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
        </div>
        <div style={{ border: '1px solid blue ', padding: '12px', margin: '10px' }}>
   <h2 style={{ color: 'green' }}>{props.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
   <p>Bio: {props.bio}</p>
 </div>
        </>

    );
};