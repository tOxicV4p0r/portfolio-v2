const FormattedDate = ({ isHighlight, children }) => {
    return (
        <div>
            <span className={`${isHighlight ? "text-primaryContent" : ""} text-sm`} >
                {children}
            </span>
        </div>

    )
}

export default FormattedDate;