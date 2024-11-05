export default function Skills() {
  return (
    <section
      id="skills"
      className="pt-16  w-screen h-screen flex justify-center items-center bg-darkblue"
    >
      <div className=" w-[90%] md:w-[85%] h-[85%] flex justify-center items-center flex-col">
        {/* Section Heading */}
        <div className="underline underline-offset-[15px] text-white">
          <h1 className="font-bold text-4xl">
            My <span className="text-orange">Skills</span>
          </h1>
        </div>

        {/* Skills Box */}
        <div className="lg:w-[90%] md:w-[85%] sm:w-[90%] w-full  h-[80%] flex justify-center flex-col gap-6 mt-8">
          {/* Skill Item */}
          {[
            { name: "HTML", percent: "90%" },
            { name: "CSS", percent: "75%" },
            { name: "Tailwind CSS", percent: "85%" },
            { name: "TypeScript", percent: "75%" },
            { name: "JavaScript", percent: "70%" },
            { name: "Python", percent: "75%" },
            { name: "GitHub", percent: "65%" },
          ].map((skill, index) => (
            <div key={index} className="flex justify-between items-center gap-4 ">
              <p className="text-xl text-white w-[15%]">{skill.name}</p>
              <div className="h-[14px] bg-purple rounded-2xl w-[40%] sm:w-[50%] md:w-[70%]">
                <div
                  className="h-full rounded-2xl bg-orange"
                  style={{ width: skill.percent }}
                ></div>
              </div>
              <p className="text-xl text-white w-[10%] text-right">
                {skill.percent}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
