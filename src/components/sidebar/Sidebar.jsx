import Category from "./category/Category"
const Sidebar = () => {
    return (
      <div>
  <button type="button" className="text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
    <span className="sr-only">Toggle Navigation</span>
    <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  </button>
  
  
  <div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0">
    <div className="px-6">
      {/* <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand"></a> */}
     <Category />
    </div>
    {/* <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
     
    </nav> */}
  </div>
      </div>
    )
  }
  
  export default Sidebar