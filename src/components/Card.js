import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <div className="project">
      <VStack>      
        <Image 
          borderRadius="15px" 
          src={imageSrc} alt='img' 
          width="100%"
        />
        <div className="projectAbout">
          <Heading size="md">{title}</Heading>
          <Text fontSize="lg">{description}</Text>
          <HStack>
            <a href="#">
              See more
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </a>
          </HStack>
          </div>
      </VStack>
    </div>

  );

  
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

};

export default Card;
