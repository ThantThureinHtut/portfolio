import Image from "next/image";
export default function MyPhotoAvatar() {
  return (
    <div className="relative size-24 sm:size-28 rounded-full overflow-hidden my-pic">
      <Image
        src="/myPhoto.jpg"
        alt="Profile Picture"
        fill
        loading="eager"
        sizes="400px"
        className="object-cover object-center"
      />
    </div>
  );
}
