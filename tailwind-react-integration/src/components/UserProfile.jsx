function UserProfile () {
return (
    <div className="UserProfile">
        <img src="https://via.placeholder.com/150" alt="Placeholder profile photo" />
        <h1>John Doe</h1>
        <p>Developer at Example Co. Loves to write code and explore new technologies.</p>

        <div className="User-Profile bg-gray-100 sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
        </div>
        <div className="group">
            <img src="https://via.placeholder.com/150" className="rounded-full sm:h-24 md:h-36 mx-auto" alt="John Doe, a developer, smiling in a circular profile photo against a neutral background" />
            <h1 className="text-xl text-blue-800 my-4 vertical-margin sm:text-lg md:text-xl">John Doe</h1>
            <p className="text-gray-600 text-base sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
        </div>
    </div>
);
}

export default UserProfile;