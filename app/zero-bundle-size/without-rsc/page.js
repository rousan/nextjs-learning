"use client";

import _ from 'lodash';

export default function WithoutRSC() {
  const arrSize = _.size([1, 2, 3, 5]);

  console.log("This is from a client component: ", arrSize);

  return (
    <main className="h-screen w-screen flex items-center justify-center font-medium">
      Lodash library is included in the bundle
    </main>
  )
}
