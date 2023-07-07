const Picture = ({ title, picture, className }) => {
    return (
        <div className={`${className ? className : "w-5/6 bg-primarySubContent2"} p-0.5 rounded-md`}>
            <img src={picture} className="object-scale-down rounded-md" alt={title} />
        </div>
    )
}

export default Picture;