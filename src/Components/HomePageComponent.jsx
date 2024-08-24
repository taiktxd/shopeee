import { PhoneIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const HomePageComponent = () => {


  return (
    <Box>
        <Box color={'#fff'} w={'100%'}  bg="linear-gradient(to bottom, #F6422E, #FF6433)" >
            <Flex justifyContent={'space-evenly'}> 
                <Flex p={'10px'} w={'40%'} justifyContent={'space-around'} alignItems={'center'} fontWeight={400} fontSize={'.8125rem'}> 
                    <Text padding={'.25rem'} cursor={'pointer'} position="relative">Kênh Người Bán
                    <Box
                        as="span"
                        height="100%"
                        width="1px"
                        bg="gray"
                        position="absolute"
                        right="-8px"
                        top="0"
                        />
                    </Text>
                    <Text padding={'.25rem'} cursor={'pointer'} position="relative">Trở thành Người Bán Shopee
                    <Box
                        as="span"
                        height="100%"
                        width="1px"
                        bg="gray"
                        position="absolute"
                        right="-10px"
                        top="0"
                        />
                    </Text>
                    <Text padding={'.25rem'} cursor={'pointer'} position="relative">Tải ứng dụng
                    <Box
                        as="span"
                        height="100%"
                        width="1px"
                        bg="gray"
                        position="absolute"
                        right="-8px"
                        top="0"
                        />
                    </Text>
                    <Flex   padding={'.25rem'}>
                    <Text >Tải ứng dụng</Text>
                    <i style={{padding: '.25rem'}} class="fab fa-facebook"></i>
                    <i style={{padding: '.25rem'}}  class="fab fa-instagram"></i>
                    </Flex>
                </Flex>

                <Flex  p={'10px'} w={'40%'} justifyContent={'space-around'} alignItems={'center'} fontWeight={400} fontSize={'.8125rem'}> 
                    <Flex  alignItems={'center'} position={'relative'}>
                        <Box position={'absolute'} top={'5px'} left={'-12px'}>
                            <i class="fa fa-bullhorn"></i>
                        </Box>
                        <Text padding={'.25rem'} cursor={'pointer'}>Thông Báo</Text>
                    </Flex>

                    <Flex  alignItems={'center'} position={'relative'}>
                        <Box position={'absolute'} top={'5px'} left={'-12px'}>
                            <i class="fa fa-question-circle"></i>
                        </Box>
                        <Text padding={'.25rem'} cursor={'pointer'}>Hổ Trợ</Text>
                    </Flex>

                    <Flex alignItems={'center'} position={'relative'} _hover={{'> .optionDown' : { display: 'block', transition: 'display 1s ease-in-out' }}} >
                        <Box position={'absolute'} top={'5px'} left={'-12px'}>
                            <i class="fa fa-globe"></i>
                        </Box>
                        <Flex  >
                            <Text padding={'.25rem'} cursor={'pointer'}>Tiếng Việt</Text>
                            <Text  padding={'.25rem'} cursor={'pointer'}><i  class="fa fa-angle-down"></i></Text>
                        </Flex>

                        <Box bgColor={'white'} color={'black'} p={'10px 0 0 10px'} w={200} 
                            position={'absolute'}
                            bottom={'-65px'}
                            left={0}
                            className='optionDown'
                            display={'none'}
                            transition={'display 0.2s ease-in-out'}
                            
                        >
                            <Text>Tiếng Việt</Text>
                            <Text>English</Text>
                        </Box>
                    </Flex>

                    <Flex w={'25%'} justifyContent={'space-around'} alignItems={'center'} position={'relative'} >
                        <Text w={'50%'} padding={'.25rem'} cursor={'pointer'} >Đăng Ký</Text>
                        <Box
                            height="60%"
                            width="1px"
                            bgColor="gray"
                            position={'absolute'}
                            top={0}
                            left={'45%'}></Box>
                        <Text w={'50%'} padding={'.25rem'} cursor={'pointer'} >Đăng Nhập</Text>
                    </Flex>

                </Flex>
            </Flex>

            <Flex justifyContent={'space-evenly'} alignItems={'center'}>
                <Box >
                    <Image  src='https://storage.googleapis.com/ops-shopee-files-live/live/affiliate-blog/2019/05/logo-full-white.png'  alt='logo' w={150}/>
                </Box>
                <Flex >
                    <Box >
                        <Box w={800} bgColor={'white'} p={'3px'}  borderRadius={'3px'} color={'white'} position={'relative'}>
                            <Input w={'90%'} border={'none'}  />
                            <Button cursor={'pointer'} w={'8%'} fontSize={'20px'} bgColor={'#F6452E'} p={'3px 21px'} borderRadius={'3px'} position={'absolute'} top={'3px'} right={'3px'} bottom={'3px'}>
                                <SearchIcon color={'white'} />
                            </Button>
                        </Box>
                        <Flex >
                            <GridItem cursor={'pointer'}  fontWeight={300} fontSize={'.75rem'} m={'.3125rem 15px  .3125rem  0'} >Thẻ Roblox</GridItem>
                            <GridItem cursor={'pointer'} fontWeight={300} fontSize={'.75rem'} m={'.3125rem 15px  .3125rem  0'} >Áo Giữ Nhiệt Nam</GridItem>
                            <GridItem cursor={'pointer'} fontWeight={300} fontSize={'.75rem'} m={'.3125rem 15px  .3125rem  0'} >Miếng Dán Thẻ ATM</GridItem>
                            <GridItem cursor={'pointer'} fontWeight={300} fontSize={'.75rem'} m={'.3125rem 15px  .3125rem  0'} >Thẻ Fbi</GridItem>
                            <GridItem cursor={'pointer'} fontWeight={300} fontSize={'.75rem'} m={'.3125rem 15px  .3125rem  0'} >Tiền Việt Nam</GridItem>
                            <GridItem cursor={'pointer'} fontWeight={300} fontSize={'.75rem'} m={'.3125rem 15px  .3125rem  0'} >Máy Chơi Game Powkiddy Q90</GridItem>
                            <GridItem cursor={'pointer'} fontWeight={300} fontSize={'.75rem'} m={'.3125rem 15px  .3125rem  0'} >Thẻ Đen Dán Ngân Hàng</GridItem>
                        </Flex>
                    </Box>
                </Flex>
                <Box fontSize={25}>
                    <i class="fa fa-shopping-cart"></i>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default HomePageComponent
