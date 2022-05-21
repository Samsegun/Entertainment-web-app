import avatar from "starter-code/assets/image-avatar.png";

const UserProfile = () => {
  return (
    <div className='w-6 h-6'>
      <img
        src={avatar}
        alt='avatar'
        className='border-2 border-white rounded-full'
      />
    </div>
  );
};

export default UserProfile;
