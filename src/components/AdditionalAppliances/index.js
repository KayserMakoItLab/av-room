import { Gltf, useGLTF } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";

const AdditionalAppliance = () => {
    const modes = ["translate", "rotate", "scale"];
    const state = proxy({ current: null, mode: 0 });
    const snap = useSnapshot(state);
    const { nodes } = useGLTF(
      "/assets/electronicAppliances/TVAudioVideo/Tv02.gltf"
    );
    return (
      <Gltf
        name="tv"
        src="/assets/electronicAppliances/TVAudioVideo/Tv02.gltf"
        receiveShadow
        castShadow
        onClick={(e) => (e.stopPropagation(), (state.current = "tv"))}
        // onPointerMissed={(e) => e.type === "click" && (state.current = null)}
        // Right click cycles through the transform modes
        // onContextMenu={(e) =>
        //   snap.current === name &&
        //   (e.stopPropagation(), (state.mode = (snap.mode + 1) % modes.length))
        // }
        // onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        // onPointerOut={(e) => setHovered(false)}
        // geometry={nodes[name].geometry}
        // material={nodes[name].material}
        // material-color={snap.current === name ? "#ff6080" : "white"}
        // dispose={null}
      />
    );
}

export default AdditionalAppliance;