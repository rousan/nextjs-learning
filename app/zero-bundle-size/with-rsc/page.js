import _ from 'lodash';

export default function WithRSC() {
  const arrSize = _.size([1, 2, 3, 5]);

  console.log("This is from a server component: ", arrSize);

  return (
    <main className="h-screen w-screen flex items-center justify-center font-medium">
      Lodash library is NOT included in the bundle
    </main>
  )
}
