import './content-item.scss';

const ContentItem = ({data}) => {
    return (
        data.map((item) => {
            return (
                <div key={item.id} className="content-item">
                    <div className="content-item-body"><p>{item.title}</p></div>
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