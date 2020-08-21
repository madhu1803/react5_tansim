import React, { Component } from "react";
import Hcard from "./Hcard";
import OutlineHeader from "./OutlineHeader";
import { BiPlusCircle } from "react-icons/bi";
export default class HcardList extends Component {
  render() {
    return (
      <div>
        {/* deals list */}
        <OutlineHeader title="Deals List" />
        <Hcard
          title="aws one year free services"
          subtitle="AWS User Group -chennai"
          time="Thurs 14 Oct 2019."
          shadow={true}
          Icon={BiPlusCircle}
        />
        <Hcard
          title="aws one year free services"
          subtitle="AWS User Group -chennai"
          time="Thurs 14 Oct 2019."
          Icon={BiPlusCircle}
        />
        <Hcard
          title="aws one year free services"
          subtitle="AWS User Group -chennai"
          time="Thurs 14 Oct 2019."
          Icon={BiPlusCircle}
        />
        <Hcard
          title="aws one year free services"
          subtitle="AWS User Group -chennai"
          time="Thurs 14 Oct 2019."
          Icon={BiPlusCircle}
        />
        {/* events list  */}
        <OutlineHeader title="Scheme List" />
        <Hcard
          title="aws one year free services"
          subtitle="AWS User Group -chennai"
          time="Thurs 14 Oct 2019."
          shadow={true}
          Icon={BiPlusCircle}
        />
        <Hcard
          title="aws one year free services"
          subtitle="AWS User Group -chennai"
          time="Thurs 14 Oct 2019."
          Icon={BiPlusCircle}
        />
        <Hcard
          title="aws one year free services"
          subtitle="AWS User Group -chennai"
          time="Thurs 14 Oct 2019."
          Icon={BiPlusCircle}
        />
        <Hcard
          title="aws one year free services"
          subtitle="AWS User Group -chennai"
          time="Thurs 14 Oct 2019."
          Icon={BiPlusCircle}
        />
      </div>
    );
  }
}
