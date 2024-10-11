import {
  FaApple,
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendoswitch } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';

interface Props {
  platformSlug: string;
}

const DynamicalIcon = ({ platformSlug }: Props) => {
  switch (platformSlug) {
    case 'linux': {
      return <FaLinux />;
    }
    case 'mac': {
      return <FaApple />;
    }
    case 'xbox': {
      return <FaXbox />;
    }
    case 'playstation': {
      return <FaPlaystation />;
    }
    case 'pc': {
      return <FaWindows />;
    }
    case 'android': {
      return <FaAndroid />;
    }
    case 'ios': {
      return <MdPhoneIphone />;
    }
    case 'nintendo': {
      return <SiNintendoswitch />;
    }
    case 'web': {
      return <BsGlobe />;
    }
  }
};

export default DynamicalIcon;
