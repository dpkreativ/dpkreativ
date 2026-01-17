from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        # Use a mobile viewport to ensure the hamburger menu is visible
        browser = p.chromium.launch()
        context = browser.new_context(viewport={"width": 375, "height": 812})
        page = context.new_page()

        page.on("console", lambda msg: print(f"Browser console: {msg.text}"))
        page.on("pageerror", lambda exc: print(f"Browser error: {exc}"))

        print("Navigating to home page...")
        page.goto("http://localhost:3000")

        # Wait for preloader to finish (detach from DOM)
        print("Waiting for preloader to finish...")
        try:
            # increasing timeout to 5s because animation is ~2.3s
            # If it's already gone, this returns immediately
            page.locator(".preloader-text").wait_for(state="detached", timeout=10000)
            print("Preloader finished.")
        except Exception as e:
            print(f"Preloader did not detach: {e}")
            page.screenshot(path="verification/mobile_preloader_stuck.png")

        # Check if menu button is visible
        print("Looking for menu button...")
        try:
            # Dump the HTML to see what's there if we fail
            menu_btn = page.get_by_role("button", name="Toggle menu")

            if not menu_btn.is_visible():
                print("Menu button not visible yet. taking screenshot.")
                page.screenshot(path="verification/debug_invisible.png")
                # print html
                # print(page.content())

            menu_btn.wait_for(state="visible", timeout=5000)
            page.screenshot(path="verification/mobile_home_loaded.png")
            print("Menu button found.")

            # Click it
            menu_btn.click()
            print("Clicked menu button.")

            stock_link = page.get_by_role("link", name="Stock")
            stock_link.wait_for(state="visible", timeout=5000)

            time.sleep(1)
            page.screenshot(path="verification/mobile_menu_open.png")
            print("Menu opened successfully.")

        except Exception as e:
            print(f"Interaction failed: {e}")
            page.screenshot(path="verification/mobile_error.png")

        browser.close()

if __name__ == "__main__":
    run()
