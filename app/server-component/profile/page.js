import { fetchUser } from "./util";

export default async function Profile() {
  const userData = await fetchUser();

  console.log(userData);
  console.log("This is a server component");

  return (
    <main className="h-screen w-screen flex items-center justify-center">
    <div>
      <div className="flex items-center justify-center">
        <img 
          src={userData.profilePic}
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <div className="text-center text-4xl my-3">
        {userData.name}
      </div>
      <div className="text-xl">
        {userData.description}
      </div>
      <div style={{ paddingTop: 10 }}>
        Projects
        <ul style={{ marginLeft: 20, listStyle: "auto" }}>
          { userData.projects.map((project, idx) => {
              return (<li key={idx} >{project}</li>)
          }) }
        </ul>
      </div>
    </div>
  </main>
  )
}
