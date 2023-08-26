const courses = [
    {
      id: 1,
      title: "English Lecture",
      description: "language lessons with the most popular teachers",
      imageUrl: "/images/img1.jpg",
      rate: "4.5",
      tags: ["langauges"],
      start: "2021-08-01T20:46:30.615Z",
      status: "Completed",
    },
    {
      id: 2,
      title: "Design Strategy",
      description:
        "lesson on planning design concept and proper planning of work",
      imageUrl: "/images/img2.jpg",
      rate: "4",
      tags: ["UI/UX design", "web design"],
      start: "2023-07-01T20:46:30.615Z",
      status: "Upcoming",
    },
    {
      id: 3,
      title: "Business Lecture",
      description:
        "lectures on how to build your buisness safely without fare of new projects",
      imageUrl: "/images/img3.jpg",
      rate: "3.9",
      tags: ["Marketing", "Finance"],
      start: "2023-07-01T20:46:30.615Z",
      status: "Active",
    },
  ];
function CourseCard(){
    return (
            <div key={courses.id} className="course-item">
                <div className="course-item__img">
                <img src="/images/img1.jpg" alt="" />
                </div>
                <div className="course-item__detail">
                <div className="course-item__body">
                    <div>
                        <div className="title">{
                            
                        }</div>
                        <div className="desc">
                            <p>The ultimate react and redux course</p>
                        </div>
                    </div>
                    <div className="rate">4</div>
                </div>
                <div className="course-item__footer"> 
                    <div className="tags">
                        <div className="badge badge--secondary">
                            <p>frontend</p>
                        </div>
                        <div className="badge badge--secondary">
                            <p>react</p>
                        </div>
                    </div>
                    <div className="caption">
                        <div className="date">
                            {
                                new Date().toLocaleDateString("en-us",{month:"short",
                            day:"numeric", year:"numeric"})
                            }
                        </div>
                        <div className="badge badge--primary">
                            <p>completed</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
    )
}
export default CourseCard