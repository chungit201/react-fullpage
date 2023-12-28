import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000}
      render={({state, fullpageApi}) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section bg-red-400">
              <p>Section 1</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section bg-blue-500">
              <p>Section 2</p>
            </div>
            <div className="section bg-yellow-500">
              <p>Section 3</p>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
      credits={{}}
    />
  )
}
