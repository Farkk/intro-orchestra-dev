import ActivityCheck from "@/components/activityCheck/ActivityCheck";
import InstructionCards from "@/components/instructionCards/InstructionCards";
import OrientationChange from "@/components/orientationChange/OrientationChange";
import PanoramaViewer from "@/components/panoramaViewer/PanoramaViewer";

const Panorama = () => {
  return (
    <div className="relative">
      <ActivityCheck>
        <InstructionCards />
        <PanoramaViewer
          imageSrc={"/panorama-images/2.jpg"}
          pitch={-30}
          yaw={0}
        />
      </ActivityCheck>
    </div>
  );
};

export default Panorama;
