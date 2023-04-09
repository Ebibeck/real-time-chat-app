import Image from "next/image";
import Link from "next/link";
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
export default function Header() {
  return (
    <div className="bg-gray-50 flex items-center  justify-between p-1 w-full h-10">
      <div className="flex items-center justify-center avatar">
  <div className=" flex items-center justify-center w-12 h-12 rounded-full border">
    <Image src="" alt={''} />
  </div>
</div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="mb-1 flex items-center justify-center">
          <EllipsisVerticalIcon className="h-6 w-6 rounded-full text-black hover:bg-gray-200" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-1 bg-white border w-36"
        >
          <li>
            <Link href={'#'}> Item 1</Link> 
          </li>
        </ul>
      </div>
    </div>
  );
}
