import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link, { LinkProps } from "next/link";
import React from "react";

const LinkButton: React.FC<LinkProps & {children: React.ReactNode; displayIcon?: boolean}> = ({children, displayIcon = true,...props}) => (
  <Link {...props}>
    <div className="mt-4 mb-link w-fit flex items-center justify-center">
      {children}&nbsp;{displayIcon && <FontAwesomeIcon icon={faArrowRight}/>}
    </div>
  </Link>
)

export default LinkButton