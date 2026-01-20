function UserProfile(props) {
    return (
        <><div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div><div style={{ 
            border: '1px solid green',
            padding: '12px', 
            margin: '14px' 
            }}>
                <h2 style={{color: 'red'}}>{props.name}</h2>
                <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
                <p>Bio: {props.bio}</p>
            </div></>
    );
}