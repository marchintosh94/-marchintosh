import { faArrowRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link, { LinkProps } from "next/link";
import React from "react";

const LinkButton: React.FC<LinkProps & {children: React.ReactNode}> = ({children, ...props}) => (
  <Link {...props}>
    <div className="mt-4 mb-link w-fit">
      {children}&nbsp;<FontAwesomeIcon icon={faArrowRight}/>
    </div>
  </Link>
)

export default LinkButton