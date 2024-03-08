import {User} from "@nx-demo/contracts";
import {Profile} from "@nx-demo/web-lib";

export default async function Index() {

  const response = await fetch('http://127.0.0.1:3333/api')
  const user: User = await response.json<User>()


  return (
    <Profile name={user.name} age={user.age} />
  );
}
