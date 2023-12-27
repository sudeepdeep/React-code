function App() {
  const [experience, setExperience] = useState(0);
  const targetExperience = 2;
  const duration = 100;

  type IsHoveredType = {
    [key: string]: boolean;
  };

  const [isHovered, setIsHovered] = useState<IsHoveredType>({
    LinkedIn: false,
    GitHub: false,
  });

  useEffect(() => {
    if (experience < targetExperience) {
      const timer = setTimeout(() => {
        setExperience((prev) => prev + 1);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [experience]);

return (
    <div className="App font-poppins text-white bg-black py-4">
      <div className="main-page md:max-w-5xl w-full mx-auto h-auto">
        <div className="heading h-[30vh] flex flex-col justify-center items-center  ">
          <div className="flex items-center gap-3">
            <div className="md:text-[80px] text-[50px]">{"<"}</div>
            <div>
              <div className="name md:text-2xl text-md text-center font-extrabold ">
                SUDEEP KONDABATHULA
              </div>
              <div className="name md:text-xl text-sm font-extrabold tracking-wide text-[#fe8040] uppercase">
                Full stack web developer
              </div>
            </div>
            <div className="flex items-center">
              <div className="md:text-[30px] text-[20px]">{"/"}</div>
              <div className="md:text-[80px] text-[50px]">{">"}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {profiles.map((profile) => (
              <span>
                <img
                  src={
                    isHovered[profile.app] === true
                      ? profile.hoverUrl
                      : profile.url
                  }
                  className="w-[20px] bg-white rounded-full cursor-pointer"
                  onClick={() => (window.location.href = profile.redirectUrl)}
                  alt="profile"
                  title={profile.app}
                  onMouseEnter={() =>
                    setIsHovered({
                      ...isHovered,
                      [profile.app]: true,
                    })
                  }
                  onMouseLeave={() =>
                    setIsHovered({
                      ...isHovered,
                      [profile.app]: false,
                    })
                  }
                />
              </span>
            ))}
          </div>
        </div>

        <div className="experience  h-[15vh] w-full  md:w-[50%] mx-auto flex flex-col items-center justify-center ">
          <div className="name opacity-50 text-sm font-semibold text-center my-2 uppercase">
            overall experience
          </div>
          <span className="text-4xl text-[#fe8040] font-semibold uppercase transition-all duration-300">
            {experience}+ years
          </span>
        </div>

</div>
</div>
);
}
