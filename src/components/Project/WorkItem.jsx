/* eslint-disable react/prop-types */


const WorkItem = ({item}) => {
  return (
    <div className="project__content">
        <div className="content-card" key={item.id}>
            <img src={item.image} alt="" className="card-image"/>
            <h3 className="card-title">{item.title} </h3>
            <a href="#" className="card-subtitle">Live demo<i className="uil uil-arrow-right arrow-icon" /></a>
        </div>
    </div>
  )
}

export default WorkItem