import axios from "axios";
import React, { useEffect, useState } from "react";
import Topic from "./Topic";

const Volunteer = () => {
  const [data, setData] = useState([
    {
      key: 1,
      title: "Child Support",
      img: "https://i.ibb.co/ByM11sP/newBooks.png",
    },
    {
      key: 2,
      title: "Refuge shelter",
      img: "https://i.ibb.co/Yp11KZf/music-Lessons.png",
    },
    {
      key: 3,
      title: "Food Charity",
      img: "https://i.ibb.co/HFvvGN0/library-Books.png",
    },
    {
      key: 4,
      title: "Host a clothing swap",
      img: "https://i.ibb.co/Q6wgFf5/ITHelp.png",
    },
    {
      key: 5,
      title: "Host a river Clean-up",
      img: "https://i.ibb.co/kqX2YP5/good-Education.png",
    },

    {
      key: 7,
      title: "Good education",
      img: "https://i.ibb.co/C9JZTL4/food-Charity.png",
    },
    {
      key: 8,
      title: "New Books for children",
      img: "https://i.ibb.co/w7NLDnY/drive-Safety.png",
    },
    {
      key: 9,
      title: "Host a study group",
      img: "https://i.ibb.co/8MN0tkr/clean-Water.png",
    },
    {
      key: 10,
      title: "Build birdhouses for your neighbors",
      img: "https://i.ibb.co/X7W7CTm/child-Support.png",
    },
    {
      key: 11,
      title: "Organize books at the library",
      img: "https://i.ibb.co/yVjKLhj/bird-House.png",
    },
    {
      key: 12,
      title: "Give a seminar on driving sagety",
      img: "https://i.ibb.co/4TpztcL/animal-Shelter.png",
    },
    {
      key: 13,
      title: "give free music lessons",
      img: "https://i.ibb.co/CM54WNC/babySit.png",
    },
    {
      key: 14,
      title: "Tech people ow to register to vote",
      img: "https://i.ibb.co/YXJsLgj/vote-Register.png",
    },
    {
      key: 15,
      title: "Clean up your local park",
      img: "https://i.ibb.co/b7K2tgS/stuffed-Animals.png",
    },
    {
      key: 16,
      title: "Give IT help to lacal aduts",
      img: "https://i.ibb.co/fqzb20t/study-Group.png",
    },
    {
      key: 17,
      title: "Foster a shelter animal",
      img: "https://i.ibb.co/jD0HBvF/school-Suffiles.png",
    },
    {
      key: 18,
      title: "Babysit during PTA meaning",
      img: "https://i.ibb.co/7W46Skw/refuse-Shelter.png",
    },
    {
      key: 19,
      title: "Collect stuffed animals.",
      img: "https://i.ibb.co/W61vJ17/river-Clean.png",
    },
  ]);

  useEffect(() => {
    axios.get("https://arcane-inlet-93515.herokuapp.com/Events").then((res) => {
      //  console.log(res.data)
      setData(res.data);
    });
    // fetch("/data.json")
    //  .then(res => res.json())
    //  .then(data => setData(data))
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 container mx-auto -mt-32">
      {data.map((item) => (
        <Topic key={item._id} items={item}></Topic>
      ))}
    </div>
  );
};

export default Volunteer;
