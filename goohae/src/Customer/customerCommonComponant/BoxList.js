const BoxList = ({ ulClassName, listContent1, listContent2, listContent3 }) => {
    return (
        <ul className={ulClassName}>
            <li>{listContent1}</li>
            <li>{listContent2}</li>
            <li>{listContent3}</li>
        </ul>
    );
}

export default BoxList;