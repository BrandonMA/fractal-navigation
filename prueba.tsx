// const Settings = memo(
//     (): JSX.Element => {
//         const setThemeSet = useSetRecoilState(currentFractalThemeAtom);

//         const toggleThemeSet = useCallback(() => {
//             setThemeSet((current) => (current === 'default' ? 'dark' : 'default'));
//         }, [setThemeSet]);

//         return (
//             <BaseCell>
//                 <BaseButton text='Toggle Theme' colorStyle='alternativeInteractiveColor' onPress={toggleThemeSet} removeShadow />
//             </BaseCell>
//         );
//     }
// );

// function Authentication(): JSX.Element {
// const renderEmailIcon = useMemo(
//     () => (color: string, size: number): JSX.Element => <Entypo name='email' size={size} color={color} />,
//     []
// );

//     const renderPasswordIcon = useMemo(
//         () => (color: string, size: number): JSX.Element => <Entypo name='lock' size={size} color={color} />,
//         []
//     );

//     return (
//         <>
//             <BaseCell>
//                 <BaseIconTextField leftImage={renderEmailIcon} placeholder='Email' />
//                 <Spacer height={16} />
//                 <BaseIconTextField leftImage={renderPasswordIcon} placeholder='Password' />
//                 <Spacer height={16} />
//                 <BaseButton text='Iniciar sesión' colorStyle='alternativeInteractiveColor' removeShadow />
//                 <Spacer height={16} />
//                 <BaseTextButton textSize='sm' colorStyle='alternativeInteractiveColor' textAlign='center'>
//                     ¿Se te olvidó tu contraseña?
//                 </BaseTextButton>
//                 <Spacer height={16} />
//                 <BaseSeparator />
//                 <Spacer height={16} />
//                 <BaseButton text='Crear cuenta' colorStyle='mainInteractiveColor' removeShadow />
//             </BaseCell>
//             <SocialMediaButtons />
//         </>
//     );
// }
