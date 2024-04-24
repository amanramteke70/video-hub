import { Stack,VStack,Heading ,Text,Button} from '@chakra-ui/react';
import React, {useState} from 'react';

const Video = () => {
const videosArr = [
    "https://vimeo.com/935281489",
    'https://youtu.be/-mJFZp84TIY?si=AJMC-lt0ugeHp5m9',
    'https://youtu.be/kFe-RRaOy48?si=DaMV7ZpXEyUbdHjs',
    'https://youtu.be/wa0IVAIqbo0?si=08sJC0lgnPezhLMa',
    'https://youtu.be/xvm3X1oyTL8?si=AzklTjM0RDgPZGd9',
];

const [videoSrc, setVideoSrc] = useState(videosArr[0])

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
    <VStack  w={'full'} >
        <video controls controlsList='nodownload' style={{width: '100%'}} src={videoSrc}></video>
        <VStack alignItems={'flex-start'} p={'8'} overflowY={'auto'}>
        <Heading>sample videos</Heading>
            <Text>Lorem, Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquid voluptas nihil a accusamus, quia expedita numquam veritatis assumenda recusandae nam itaque quam debitis earum sint necessitatibus eaque vel doloremque in eos. Amet delectus culpa, aliquam omnis perferendis corrupti, accusamus quasi minima sapiente dignissimos possimus harum aperiam, placeat praesentium! Impedit consequatur repellat, fugit voluptate nemo minima aliquam quaerat veritatis quod! ipsum dolor sit amet consectetur adipisicing elit. Nam assumenda fuga eius itaque suscipit minus, amet omnis enim magnam impedit rem inventore molestiae?</Text>
        </VStack>

    </VStack>
        <VStack w={['full', 'xl']} p={'8'} overflowY={'auto'} alignItems={'stretch'} spacing={'8'}>
        {videosArr.map((item, index) => (
  <Button variant={'ghost'} colorScheme='purple' onClick={()=>{setVideoSrc(item)}}>
    Lecture {index+1}
  </Button>
))}
        </VStack>
    </Stack>

  )
}

export default Video;