export const AsideMenu = () => {
  return (
    <aside className="mr-8 w-1/5">
      <nav className="mb-8">
        <h3 className="font-bold text-xl mb-2">New Releases</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="">
              Last 30 days
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="">
              This week
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="">
              Next week
            </a>
          </li>
        </ul>
      </nav>
      <nav className="mb-8">
        <h3 className=" font-bold text-xl mb-2">Top</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="">
              Best of the year
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="">
              Popular in 2022
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="">
              All time top 250
            </a>
          </li>
        </ul>
      </nav>
      <nav className="mb-8">
        <h3 className="font-bold text-xl mb-2">Platforms</h3>
        <ul>
          <li className="mb-2">
            <a href="#" className="">
              PC
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="">
              PlayStation 4
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="">
              Xbox One
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
