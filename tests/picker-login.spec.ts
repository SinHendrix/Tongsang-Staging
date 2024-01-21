import { test, expect } from '@playwright/test';

test('Login with registered phone number', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()


    // check all button are clickable
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()


    // clear input phone number
    await page.getByRole('button', { name: '전체 지우기' }).click()
    
    // input the registered phone number
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeVisible()


    // click login
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()
    await page.getByRole('button', { name: '확인' }).click()

    // verify the number is registered and redirected to intent page
    await expect(page.getByTestId('choose-intent-page-title')).toBeVisible()
    await expect(page.getByTestId('choose-intent-page-description')).toBeVisible()

    await expect(page.locator('text=등록된 전화번호가 아닙니다')).toBeHidden()
    await expect(page.locator('text=첫 방문이라면 직원에게 회원등록을 요청해주세요')).toBeHidden()

});

test('Login with unregistered phone number', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()


    // check all button are clickable
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()


    // clear input phone number
    await page.getByRole('button', { name: '전체 지우기' }).click()
    
    // input the registered phone number
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '1' }).click()

    await expect(page.getByRole('button', { name: '확인' })).toBeVisible()


    // click login
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()
    await page.getByRole('button', { name: '확인' }).click()

    // verify login with unregistered phone number
    await expect(page.getByText('등록된 전화번호가 아닙니다')).toBeVisible()
    await expect(page.getByText('첫 방문이라면 직원에게 회원등록을 요청해주세요')).toBeVisible()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // dismiss the confirmation modal
    await page.getByTestId('alert-dialog-check-button').click()

    // verify redirected to login page
    await page.getByTestId('alert-dialog-check-button').click()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
});

test('Check new register button', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    // await page.getByTestId('menu-button').click()

    // verify register button
    await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()

});

test('Access Main Page without Login', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/choose-intent')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()
});

test('Login with under 10 digits phone number', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()


    // check all button are clickable
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()


    // clear input phone number
    await page.getByRole('button', { name: '전체 지우기' }).click()
    
    // input the registered phone number
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()


    // click login
    // await page.getByRole('button', { name: '확인' }).click()


});

test('Login with 10 digits unregistered phone number', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()


    // check all button are clickable
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()


    // clear input phone number
    await page.getByRole('button', { name: '전체 지우기' }).click()
    
    // input the registered phone number
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()


    // click login
    // await page.getByRole('button', { name: '확인' }).click()


});

test('Login with under 11 digits unregistered phone number', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()


    // check all button are clickable
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()


    // clear input phone number
    await page.getByRole('button', { name: '전체 지우기' }).click()
    
    // input the registered phone number
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()


    // click login
    await page.getByRole('button', { name: '확인' }).click()

    // verifiy main page
    await page.getByTestId('choose-intent-page-title').isHidden()
    await page.getByTestId('choose-intent-page-description').isHidden()
    await page.getByTestId('find-items-button').isHidden()
    await page.getByTestId('send-items-button').isHidden()    

});

test('Login with 10 digits registered phone number', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()


    // check all button are clickable
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()


    // clear input phone number
    await page.getByRole('button', { name: '전체 지우기' }).click()
    
    // input the registered phone number
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeVisible()


    // click login
    await page.getByRole('button', { name: '확인' }).click()

    // verifiy main page
    await page.getByTestId('choose-intent-page-title').isVisible()
    await page.getByTestId('choose-intent-page-description').isVisible()
    await page.getByTestId('find-items-button').isEnabled()
    await page.getByTestId('send-items-button').isEnabled()

});

test('Login with 11 digits registered phone number', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()


    // check all button are clickable
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()


    // clear input phone number
    await page.getByRole('button', { name: '전체 지우기' }).click()
    
    // input the registered phone number
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeVisible()


    // click login
    await page.getByRole('button', { name: '확인' }).click()

    // verifiy main page
    await page.getByTestId('choose-intent-page-title').isVisible()
    await page.getByTestId('choose-intent-page-description').isVisible()
    await page.getByTestId('find-items-button').isEnabled()
    await page.getByTestId('send-items-button').isEnabled()

});

test('Login with more than 11 digits phone number', async ({ page }) => {

    await page.goto('http://golds-tongsang-dev.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    // await expect(page.getByTestId('menu-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()


    // check all button are clickable
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeEnabled()


    // clear input phone number
    await page.getByRole('button', { name: '전체 지우기' }).click()
    
    // input the registered phone number
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await page.getByRole('button', { name: '3' }).click()
    await page.getByRole('button', { name: '4' }).click()
    await page.getByRole('button', { name: '5' }).click()
    await page.getByRole('button', { name: '6' }).click()
    await page.getByRole('button', { name: '7' }).click()
    await page.getByRole('button', { name: '8' }).click()
    await page.getByRole('button', { name: '9' }).click()
    await page.getByRole('button', { name: '0' }).click()
    await page.getByRole('button', { name: '1' }).click()
    await page.getByRole('button', { name: '2' }).click()
    await expect(page.getByRole('button', { name: '확인' })).toBeVisible()


    // click login
    await page.getByRole('button', { name: '확인' }).click()

    // verifiy main page
    await expect(page.getByTestId('choose-intent-page-title')).toBeHidden()
    await expect(page.getByTestId('choose-intent-page-description')).toBeHidden()
    await expect(page.getByTestId('find-items-button')).toBeHidden()
    await expect(page.getByTestId('send-items-button')).toBeHidden()
    await expect(page.getByText('01234567890')).toBeTruthy()

});