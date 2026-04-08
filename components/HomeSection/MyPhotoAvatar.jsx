import Image from "next/image";
export default function MyPhotoAvatar() {
  return (
    <div className="relative size-32 sm:size-40 md:size-56 lg:size-64 rounded-full overflow-hidden my-pic">
      <Image
        src="https://avatars.githubusercontent.com/u/119115304?v=4"
        alt="Profile Picture"
        fill
        loading="eager"
        sizes="400px"
        className="object-cover object-center"
      />
    </div>
  );
}
