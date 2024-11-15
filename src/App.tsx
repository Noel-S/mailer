import { SidebarInset, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/app-sidebar";
import { Separator } from "@radix-ui/react-separator";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "./components/ui/breadcrumb";
import { Compose } from "./components/compose";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <>
      <SidebarProvider
        style={{
          "--sidebar-width": "10rem",
          "--sidebar-width-mobile": "4rem",
        } as React.CSSProperties}
      >
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">
                    Compose
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <Compose />
          </div>
        </SidebarInset>
      </SidebarProvider>
      <Toaster closeButton />
    </>
  );
}

export default App;
