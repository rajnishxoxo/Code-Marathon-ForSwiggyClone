const About = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl border-b-2 mt-9">
        About Us
      </h1>
      <p className="font-medium border-spacing-1 text-center m-8 text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere
        doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi
        facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas
        provident ipsam, veritatis nostrum velit quos recusandae est mollitia
        esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem
        praesentium, doloremque distinctio nesciunt porro tempore quis eaque
        labore voluptatibus ea necessitatibus exercitationem tempora molestias.
        Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore
        sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint
        nemo totam dolorum! Reprehenderit delectus expedita a alias nam
        recusandae illo debitis repellat libero, quasi explicabo molestiae
        saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis
        excepturi harum numquam vel nihil? Ipsum
      </p>

      <h1 className="text-center font-bold text-4xl border-b-2 ">
        Our Products
      </h1>

      <div className="flex flex-row mx-auto w-full justify-evenly my-10 ">
        <div>
            <img className="w-60 h-40 object-contain" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <h2 className="text-xl font-medium  ">Men's Clothing</h2>
        </div>
        <div>
            <img className="w-60 h-40 object-contain" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <h2 className="text-xl font-medium  ">Women's Clothing</h2>
        </div>
        <div>
            <img className="w-60 h-40 object-contain" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <h2 className="text-xl font-medium ">Jewelery</h2>
        </div>

        <div>
            <img className="w-60 h-40 object-contain" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <h2 className="text-xl font-medium ">Electronics</h2>
        </div>
      </div>

    </div>
  );
};

export default About;
