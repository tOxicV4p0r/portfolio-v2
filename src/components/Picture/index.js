const Picture = ({ title, picture, className }) => {
    return (
        <div className={`${className ? className : "w-5/6 bg-primarySubContent2"} p-1 rounded-lg`}>
            <img src={picture} className="object-scale-down" alt={title} />
        </div>
    )
}

export default Picture;