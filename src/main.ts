import {bootstrapCameraKit } from "@snap/camera-kit";

document.addEventListener("DOMContentLoaded", async () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  if (!canvas) {
    console.error("Canvas not found");
    return;
  }

  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzQ4OTM0MTUzLCJzdWIiOiJkZGUwYzRhMS1kZmI5LTRiZTEtOTAyNS1jMTQ5YzE2Njg0Zjd-U1RBR0lOR35kMjA2NjY4OC03MmQyLTQ0MmQtYTJhZi0zNjI2YjUwYmFhZWMifQ.5r6ZN7PvKakqMaEJbH2FwmETTOS2p3UPtdByH_SngJY'
  });

  const session = await cameraKit.createSession({ liveRenderTarget: canvas });

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  await session.setSource(stream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens('b0525937-6578-4e78-a04d-53b6f7137d86','e1398642-5877-468c-8f52-268df062c065');
await session.applyLens(lens);
});
