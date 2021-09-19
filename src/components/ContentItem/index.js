import './content-item.scss';

const ContentItem = ({data}) => {
    return (
        data.map((item) => {
            return (
                <div key={item.id} className="content-item">
                    <a onClick={() => console.log("click")} className="content-item-body"><p>{item.title}</p></a>
                    <div className="content-item-bottom">
                        <span>{item.time}</span>
                        <span>{item.date}</span>
                    </div>
                </div>
            )
        })  
    )
}

export default ContentItem;