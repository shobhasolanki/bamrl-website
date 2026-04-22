import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const ZoomControls = () => {
  const { camera } = useThree();

  const zoomIn = () => {
    camera.zoom = Math.min(camera.zoom + 0.2, 5);
    camera.updateProjectionMatrix();
  };

  const zoomOut = () => {
    camera.zoom = Math.max(camera.zoom - 0.2, 0.5);
    camera.updateProjectionMatrix();
  };

  return (
    <Html fullscreen>
      <div className="absolute bottom-4 right-4 flex gap-2 z-50">
        <button
          onClick={zoomOut}
          className="w-9 h-9 bg-black/70 text-white border border-white/30 text-lg font-bold backdrop-blur-sm"
        >
          −
        </button>
        <button
          onClick={zoomIn}
          className="w-9 h-9 bg-black/70 text-white border border-white/30 text-lg font-bold backdrop-blur-sm"
        >
          +
        </button>
      </div>
    </Html>
  );
};

export default ZoomControls;