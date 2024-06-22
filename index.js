const modelViewerTexture = document.querySelector("model-viewer#duck");

modelViewerTexture.addEventListener("load", () => {

  const material = modelViewerTexture.model.materials[0];

  const createAndApplyTexture = async (channel, event) => {
    if (event.target.value) {
      
      const texture = await modelViewerTexture.createTexture(event.target.value);
     
      material['pbrMetallicRoughness']["baseColorTexture"].setTexture(texture);
    }
  }

  document.querySelector('#normals2').addEventListener('input', (event) => {
    createAndApplyTexture('baseColorTexture', event);
  });
});
