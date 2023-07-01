const Description = ({ data, truncate }) => {
    return (
        <div className={`text-primaryContent text-sm ${truncate ? "line-clamp-5" : ""}`}>
            {data}
        </div>
    )
}

export default Description;