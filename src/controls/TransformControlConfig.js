import { TransformControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { proxy, useSnapshot } from "valtio";

const TransformControlConfig = () => {
    const state = proxy({ current: null, mode: 0 });
    const snap = useSnapshot(state)
    const scene = useThree((state) => state.scene)
    // console.log(state);
    return (
      <>
        {snap.current && (
          <TransformControls
            object={scene.getObjectByName(snap.current)}
            mode={modes[snap.mode]}
          />
        )}
      </>
    );
}

export default TransformControlConfig;