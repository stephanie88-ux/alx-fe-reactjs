function UserProfile () {
return (
    <div className="UserProfile">
        <img src="https://via.placeholder.com/150" alt="User"/>
        <h1>John Doe</h1>
        <p>Developer at Example Co. Loves to write code and explore new technologies.</p>

        <div className="User-Profile bg-gray-100 p-4-sm p-8-md max-w-xs max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        </div>
        <div className="group">
            <img src="https://via.placeholder.com/150" className="rounded-full w-36 h-36-md  w-24 h-24-sm mx-auto" alt="User"/>
            <h1 className="text-xl-sm text-base-md text-blue-800 my-4 vertical-margin">John Doe</h1>
            <p className="text-sm-sm text-base-md text-gray-600 text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    </div>
);
}

export default UserProfile;