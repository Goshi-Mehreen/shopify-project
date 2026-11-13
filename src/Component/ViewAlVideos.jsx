import React from 'react'
import EmptyState from '../assets/Empty.png'
import Group from '../assets/Group.png'

function ViewAlVideos() {
  return (
    <div className="mx-auto max-w-[1100px] w-full min-h-[500px] flex flex-col items-center justify-center text-center px-4 py-10">

  <div className="mb-4">
    <img src={EmptyState} alt="" className="mx-auto" />
  </div>

  <div className="flex flex-col items-center gap-3">
    <h2 className="text-xl font-semibold">
      No Videos Generated Yet
    </h2>

    <p className="max-w-[500px] text-gray-500">
      Seems like you have not generated any product videos yet.
      Ready to create your first AI video? Click the button below
      to get started.
    </p>

    <button className="flex items-center justify-center gap-2 mt-3 px-5 py-3 bg-white text-black rounded-lg">
      <img src={Group} alt="" className="w-5 h-5 " />
      <span>Create Your First Video</span>
    </button>
  </div>

</div>
  )
}

export default ViewAlVideos
