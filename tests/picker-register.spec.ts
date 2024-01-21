import { test, expect } from '@playwright/test';

test('Register with filled name, unregistered phone number, affiliation, and terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("081200000096")
    await page.getByPlaceholder('소속을 입력해주세요.').fill("Tongsang Regression")

    // check terms and conditions
    await page.getByLabel('개인정보 수집∙이용 및 제 3자 제공 동의').click()

    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // verify refirected to login page
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

});

test('Register with blank name, phone number, affiliation, and terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // // verify pop up message
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeVisible()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // // click confirm pop up message
    // await page.getByTestId('alert-dialog-check-button').click()

    // // verify pop up message is dismissed
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled name, blank phone number, affiliation, and terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    
    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // // verify pop up message
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeVisible()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // // click confirm pop up message
    // await page.getByTestId('alert-dialog-check-button').click()

    // // verify pop up message is dismissed
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled phone number, blank name, affiliation, and terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("081200000099")
    
    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // // verify pop up message
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeVisible()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // // click confirm pop up message
    // await page.getByTestId('alert-dialog-check-button').click()

    // // verify pop up message is dismissed
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled terms and conditions, blank name, phone number, and affiliation', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('소속을 입력해주세요.').fill("Tongsang Regression")
    
    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // // verify pop up message
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeVisible()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // // click confirm pop up message
    // await page.getByTestId('alert-dialog-check-button').click()

    // // verify pop up message is dismissed
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled affiliation, blank name, phone number, and terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // check terms and conditions
    await page.getByLabel('개인정보 수집∙이용 및 제 3자 제공 동의').click()
    
    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // // verify pop up message
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeVisible()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // // click confirm pop up message
    // await page.getByTestId('alert-dialog-check-button').click()

    // // verify pop up message is dismissed
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled name, filled with unregistered phone number, blank affiliation, and terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("081200000098")
    
    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // verify pop up message
    await expect(page.getByText('개인정보 수집 동의에 동의 부탁드립니다')).toBeVisible()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // click confirm pop up message
    await page.getByTestId('alert-dialog-check-button').click()

    // verify pop up message is dismissed
    await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled name, filled with registered phone number, blank affiliation, and terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("081200000098")
    
    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // verify pop up message
    await expect(page.getByText('개인정보 수집 동의에 동의 부탁드립니다')).toBeVisible()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // click confirm pop up message
    await page.getByTestId('alert-dialog-check-button').click()

    // verify pop up message is dismissed
    await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled name, blank phone number, filled affiliation, and terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    await page.getByPlaceholder('소속을 입력해주세요.').fill("Tongsang Regression")

    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // // verify pop up message
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeVisible()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // // click confirm pop up message
    // await page.getByTestId('alert-dialog-check-button').click()

    // // verify pop up message is dismissed
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled name, blank phone number, blank affiliation, and checked terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")

    // check terms and conditions
    await page.getByLabel('개인정보 수집∙이용 및 제 3자 제공 동의').click()

    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // // verify pop up message
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeVisible()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // // click confirm pop up message
    // await page.getByTestId('alert-dialog-check-button').click()

    // // verify pop up message is dismissed
    // await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    // await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled name, filled with unregistered phone number, filled affiliation, and unchecked terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("081200000080")
    await page.getByPlaceholder('소속을 입력해주세요.').fill("Tongsang Regression")

    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // verify pop up message
    await expect(page.getByText('개인정보 수집 동의에 동의 부탁드립니다')).toBeVisible()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // click confirm pop up message
    await page.getByTestId('alert-dialog-check-button').click()

    // verify pop up message is dismissed
    await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled name, filled with registered phone number, filled affiliation, and unchecked terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("081200000000")
    await page.getByPlaceholder('소속을 입력해주세요.').fill("Tongsang Regression")

    // veritfy the register button is disabled
    await expect(page.getByTestId('register-button')).toBeDisabled()

    // verify pop up message
    await expect(page.getByText('개인정보 수집 동의에 동의 부탁드립니다')).toBeVisible()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // click confirm pop up message
    await page.getByTestId('alert-dialog-check-button').click()

    // verify pop up message is dismissed
    await expect(page.getByText('빈칸 없이 모두 입력해주세요')).toBeHidden()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeHidden()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with filled name, filled with unregistered phone number, blank affiliation, and checked terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("08120001")

    // check terms and conditions
    await page.getByLabel('개인정보 수집∙이용 및 제 3자 제공 동의').click()

    // veritfy the register button is enabled and click register
    await expect(page.getByTestId('register-button')).toBeEnabled()
    await page.getByTestId('register-button').click()

    // verify redirect to login page
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

});

test('Register with filled name, filled with registered phone number, blank affiliation, and checked terms and conditions', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("08120000")

    // check terms and conditions
    await page.getByLabel('개인정보 수집∙이용 및 제 3자 제공 동의').click()

    // veritfy the register button is enabled and click register
    await expect(page.getByTestId('register-button')).toBeEnabled()
    await page.getByTestId('register-button').click()

    // verify register using registered phone number
    await expect(page.getByText('이미 등록된 회원입니다')).toBeVisible()
    await expect(page.getByTestId('alert-dialog-check-button')).toBeVisible()

    // confirm pop up message
    await page.getByTestId('alert-dialog-check-button').click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with less than 10 digits phone number', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok Regression")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("123456")

    // check terms and conditions
    await page.getByLabel('개인정보 수집∙이용 및 제 3자 제공 동의').click()

    // veritfy the register button is enabled and click register
    await expect(page.getByTestId('register-button')).toBeDisabled()


    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

});

test('Register with exactly 10/11 digits phone number', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok 10 digits")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("08120002")

    // check terms and conditions
    await page.getByLabel('개인정보 수집∙이용 및 제 3자 제공 동의').click()

    // verify register button
    await expect(page.getByTestId('register-button')).toBeEnabled()
    
    // veritfy the register button is enabled and click register
    await expect(page.getByTestId('register-button')).toBeEnabled()
    await page.getByTestId('register-button').click()

    // verify refirected to login page
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

});

test('Register with more than 11 digits phone number', async ({ page }) => {

    await page.goto('https://golds-tongsang.vercel.app/tablet/login')
    await page.pause()

    // verify all element is visible first
    await expect(page.getByTestId('register-button')).toBeVisible()
    await expect(page.getByRole('img', { name: 'Upstore Logo' })).toBeVisible()
    await expect(page.locator('text=등록된 전화번호를 입력해주세요')).toBeVisible()
    await expect(page.locator('text=처음 방문하시는 분은 직원에게 회원가입을 요청해주세요.')).toBeVisible()
    await expect(page.getByRole('button', { name: '확인' })).toBeDisabled()
    await expect(page.getByRole('button', { name: '전체 지우기' })).toBeHidden()

    //click the kebab button
    await page.getByTestId('register-button').click()

    // // verify content in the sidebar
    // await expect(page.getByLabel('close')).toBeVisible()
    // await expect(page.getByRole('button', { name: '업스토어 통상' })).toBeVisible()
    // await expect(page.getByRole('button', { name: '회원가입' })).toBeVisible()
    // await expect(page.getByTestId('register-button')).toBeVisible()

    // navigate to register page
    await page.getByRole('button', { name: '회원가입' }).click()

    // verify register page
    await expect(page.getByText('방문자 가입', { exact: true })).toBeVisible()
    await expect(page.getByRole('heading', { name: '업스토어 통상 방문자 가입' })).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()
    await expect(page.getByText('업스토어 개인정보 수집∙이용 및 제 3자 제공 동의서')).toBeVisible()
    await expect(page.getByText('개인정보 수집∙이용 및 제 3자 제공 동의', { exact: true })).toBeVisible()

    // fill the form
    await page.getByPlaceholder('이름을 입력해주세요.').fill("Ma Dong Seok 10 digits")
    await page.getByPlaceholder('전화번호를 입력해주세요.').fill("012345678301234567")

    // check terms and conditions
    await page.getByLabel('개인정보 수집∙이용 및 제 3자 제공 동의').click()

    // verify register button
    await expect(page.getByTestId('register-button')).toBeEnabled()

});